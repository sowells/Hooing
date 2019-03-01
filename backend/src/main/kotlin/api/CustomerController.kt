package api

import infra.domain.Customer
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController
import service.CustomerService

@RestController
class CustomerController (val customerService: CustomerService) {

    @GetMapping("/customers")
    @ResponseBody
    fun customers():Collection<Customer> {
        return customerService.findAllCustomers()
    }

}