package infra.repository

import infra.domain.Customer
import org.springframework.data.jpa.repository.JpaRepository


interface CustomerRepository : JpaRepository<Customer, Long> {

    fun findByName(name:String):Collection<Customer>

}