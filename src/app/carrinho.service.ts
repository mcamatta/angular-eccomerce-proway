import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutoCarrinho[] = [];

  constructor() {}

  obtemCarrinho(): Array<object> | string {
    return JSON.parse(localStorage.getItem('carrinho') || '');
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho): void {
    this.itens.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  limparCarrinho(): void {
    this.itens = [];
    localStorage.clear();
  }
}
