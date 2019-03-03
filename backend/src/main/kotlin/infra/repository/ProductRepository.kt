package infra.repository

import infra.domain.Customer
import infra.domain.Product
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.CrudRepository


interface ProductRepository : CrudRepository<Product, Integer> {
}