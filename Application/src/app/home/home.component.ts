import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  query: string = '';
  products = [
    { title: 'Web development', price: 19.99, imageUrl: '../../assets/web1.png' },
    { title: 'HTML', price: 24.99, imageUrl: '../../assets/html1.jpg' },
    { title: 'Node', price: 24.6, imageUrl: '../../assets/node.png' },
  ];

  get filteredProducts() {
    return this.products.filter(product => 
      product.title.toLowerCase().includes(this.query.toLowerCase())
    );
  }

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.query = inputElement.value;
  }
}
