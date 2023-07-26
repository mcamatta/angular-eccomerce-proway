import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutoCarrinho[] = [];

  constructor() {}

  obtemCarrinho(): IProdutoCarrinho[] {
    this.itens =  JSON.parse(localStorage.getItem('carrinho') || '');
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho): void {
    this.itens.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  limparCarrinho(): void {
    this.itens = [];
    localStorage.clear();
  }
  
  removerProdutoCarrinho(produtoId: number): void {
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }
}
