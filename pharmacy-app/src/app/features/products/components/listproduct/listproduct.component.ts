import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { CartService } from '../../../../core/services/cart.service';
import { ProductService } from '../../../../core/services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Product, ProductCategory } from '../../../../core/models/product.model';

/*interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  quantity: number;
}*/

@Component({
  selector: 'app-listproduct', 
  standalone: true,
  imports: [CommonModule, FormsModule,NavbarComponent],
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.scss']
})
export class ListproductComponent {
  success: string | null = null;
  error: string | null = null;
  products: Product[] = [];
  private allProducts: Product[] = [];

  constructor(
    private router: Router,
    private cartService: CartService,
    private productService: ProductService
  ) 
  {
  
  }

 ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data.map(p => ({ ...p, quantity: 1 }));
        this.allProducts = [...this.products];
      },
      error: (err) => {
        console.error('Error al cargar productos', err);
        this.error = 'No se pudieron cargar los productos.';
      }
    });
  }

  /*products: Product[] = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      description: 'Analgésico y antipirético',
      price: 2.50,
      stock: 20,
      category: 'analgesics',
      quantity: 1
    },
    {
      id: 2,
      name: 'Vitamina C 1000mg',
      description: 'Refuerza el sistema inmunológico',
      price: 5.00,
      stock: 15,
      category: 'vitamins',
      quantity: 1
    },
    {
      id: 3,
      name: 'Amoxicilina 500mg',
      description: 'Antibiótico de amplio espectro',
      price: 8.75,
      stock: 0,
      category: 'antibiotics',
      quantity: 1
    },
    {
      id: 4,
      name: 'Crema dermatológica',
      description: 'Tratamiento para irritaciones',
      price: 12.00,
      stock: 8,
      category: 'dermatology',
      quantity: 1
    }
  ];

  private allProducts = [...this.products];*/

  /**
   * Filtrar productos por categoría
   */
  filterBy(category: string) {
    if (category === 'all') {
      this.products = [...this.allProducts];
    } else {
      this.products = this.allProducts.filter(p => p.category === category);
    }
  }
  /**
   * Agregar producto al carrito (simulado)
   */
  addToCart(product: Product) {
    if (product.stock <= 0) {
      this.error = 'El producto está agotado.';
      this.success = null;
      return;
    } 

    if (product.quantity > product.stock) {
      this.error = 'La cantidad seleccionada supera el stock disponible.';
      this.success = null;
      return;
    }

    this.success = `Se agregó ${product.quantity} x ${product.name} al carrito.`;
    this.error = null;

this.cartService.addToCart({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity :product.quantity,
    subtotal: product.price * product.quantity
  });

       // Aquí puedes integrar tu servicio de carrito
     // Redirigir al carrito
  this.router.navigate(['/cart']);
  }
}
