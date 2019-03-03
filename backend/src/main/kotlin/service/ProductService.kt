package service

import infra.domain.Customer
import infra.domain.Product
import infra.repository.CustomerRepository
import infra.repository.ProductRepository
import org.springframework.stereotype.Service
import org.springframework.web.server.WebSession

@Service
class ProductService (val productRepository: ProductRepository) {

}