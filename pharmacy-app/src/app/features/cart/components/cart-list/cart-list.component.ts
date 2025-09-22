import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Modal } from 'bootstrap';
import { CartService } from '../../../../core/services/cart.service';
import { CartItem, Product } from '../../../../core/models/product.model';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule,FormsModule, NavbarComponent],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent {
  items: CartItem[] = [];
   itemToDelete: CartItem | null = null; // 👉 Producto seleccionado para eliminar

  constructor(private cartService: CartService, private router: Router) {
    this.items = this.cartService.getCartItems();
  }

  get total() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

   clearCart() {
    this.cartService.clearCart();
    this.items = [];
  }

  updateQuantity(item: CartItem, event: any) {
    const newQty = Number(event.target.value);
    this.cartService.updateQuantity(item.id, newQty);
  }

  removeItem(item: CartItem) {
  this.cartService.removeFromCart(item.id);
}

confirmDelete(item: CartItem) {
    this.itemToDelete = item;
    const modalEl = document.getElementById('deleteModal');
    if (modalEl) {
      const modal = Modal.getOrCreateInstance(modalEl); // ✅ forma correcta
      modal.show();
    }
  }

  removeItemConfirmed() {
    if (this.itemToDelete) {
      this.cartService.removeFromCart(this.itemToDelete.id);
      this.itemToDelete = null;
    }
    const modalEl = document.getElementById('deleteModal');
    if (modalEl) {
      const modal = Modal.getOrCreateInstance(modalEl);
      modal.hide();
    }
  }

  irProduct(){
    // Redirigir al carrito
     this.router.navigate(['/products']);
  }

  goCheckout(){
     this.router.navigate(['/checkout']);
  }
}
