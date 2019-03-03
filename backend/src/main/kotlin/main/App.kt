package main

import infra.domain.Customer
import infra.repository.CustomerRepository
import infra.repository.ProductRepository
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import service.ProductService
import kotlin.reflect.full.companionObject

@SpringBootApplication(scanBasePackages = ["config","infra.**","service","api"])
@EntityScan("infra.**")
@EnableJpaRepositories("infra.**")
class App(val productService: ProductService,
          val productRepository: ProductRepository ) : CommandLineRunner {
    override fun run(vararg args: String?) {
    }
}

fun main(args : Array<String>) {
    runApplication<App>(*args) {
    }
}

