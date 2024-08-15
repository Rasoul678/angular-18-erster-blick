import { Component } from '@angular/core';
import { IngredientList } from '../ingredient-list/ingredient-list.component';
import { SignUpForm } from '../sign-up-form/sign-up-form.component';
import { TextTransformerComponent } from '../text-transformer/text-transformer.component';
import { TodoListItem } from '../todo-item/todo-list-item.component';
import { UserControls } from '../user-controls/user-controls.component';

@Component({
  standalone: true,
  selector: 'todo-list',
  imports: [
    TextTransformerComponent,
    TodoListItem,
    SignUpForm,
    UserControls,
    IngredientList,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoList {}
