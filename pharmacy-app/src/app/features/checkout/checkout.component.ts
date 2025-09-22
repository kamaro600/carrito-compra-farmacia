import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { CartService } from '../../core/services/cart.service';
import { CartItem } from '../../core/models/product.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,FormsModule, NavbarComponent],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems(); 
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  pay(): void {
    // Aquí luego puedes conectar con tu API de pagos
    alert(`Pago realizado con éxito por S/. ${this.total.toFixed(2)}`);
    this.cartService.clearCart(); // limpia carrito después de pagar
  }
}
