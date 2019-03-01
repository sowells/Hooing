package main

import infra.domain.Customer
import infra.repository.CustomerRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import service.CustomerService

@SpringBootApplication(scanBasePackages = ["config","infra.**","service","api"])
@EntityScan("infra.**")
@EnableJpaRepositories("infra.**")
class App(val customerService: CustomerService,
          val customerRepository: CustomerRepository ) : CommandLineRunner {
    override fun run(vararg args: String?) {
        val customer = Customer().apply {
            name = "Juho"
        }
        customerRepository.save(customer)
        customerService.findAllCustomers().forEach{
            println(it)
        }

        println("Test Runner")
    }

}

fun main(args : Array<String>) {
    runApplication<App>(*args) {


    }
}