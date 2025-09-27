import { JSX } from "react"
import { IBrand } from "./brands.interface"
import { ICategory } from "./categories.interface"
import { IPagination } from "./pagination.interface"
import { ISubcategory } from "./subcategory.interface"

export interface IProductsResponse {
  results: number
  metadata: IPagination
  data: IProducts[]
}


export interface IProducts {
  map(arg0: (product: IProducts) => JSX.Element): import("react").ReactNode
  sold?: number
  images: string[]
  subcategory: ISubcategory[]
  ratingsQuantity: number
  _id: string
  title: string
  slug: string
  description: string
  quantity: number
  price: number
  imageCover: string
  category: ICategory
  brand: IBrand
  ratingsAverage: number
  createdAt: string
  updatedAt: string
  id: string
  priceAfterDiscount?: number
  availableColors?: string[] 
}




