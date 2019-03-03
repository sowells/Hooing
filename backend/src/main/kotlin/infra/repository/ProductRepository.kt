package infra.repository

import infra.domain.Product
import org.springframework.data.repository.CrudRepository


interface ProductRepository : CrudRepository<Product, Integer> {
}