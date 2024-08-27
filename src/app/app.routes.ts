import { Routes } from '@angular/router';
import { DeferableComponent } from './components/deferable/deferable.component';
import { HomeComponent } from './components/home/home.component';
import { IngredientList } from './components/ingredient-list/ingredient-list.component';
import { OptimizeImageComponent } from './components/optimize-image/optimize-image.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TextTransformerComponent } from './components/text-transformer/text-transformer.component';
import { TodoList } from './components/todo-list/todo-list.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: 'todo',
    title: 'App Todo List Page',
    component: TodoList,
  },
  {
    path: 'image',
    title: 'App Image Page',
    component: OptimizeImageComponent,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: UserComponent,
  },
  {
    path: 'list',
    title: 'App List Page',
    component: IngredientList,
  },
  {
    path: 'defer',
    title: 'App Deferable View Page',
    component: DeferableComponent,
  },
  {
    path: 'text',
    title: 'App Text Transform Page',
    component: TextTransformerComponent,
  },
  {
    path: 'reactive-form',
    title: 'App Reactive Forms Page',
    component: ReactiveFormsComponent,
  },
];
