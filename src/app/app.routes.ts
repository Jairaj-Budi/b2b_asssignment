import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "home",
    redirectTo: "",
    pathMatch: "full",
  },
  {
    path: "products",
    loadComponent: () =>
      import("./pages/products/products.component").then(
        (m) => m.ProductsComponent
      ),
  },
  {
    path: "about",
    loadComponent: () =>
      import("./pages/about/about.component").then((m) => m.AboutComponent),
  },
  {
    path: "contact",
    loadComponent: () =>
      import("./pages/contact/contact.component").then(
        (m) => m.ContactComponent
      ),
  },
];
