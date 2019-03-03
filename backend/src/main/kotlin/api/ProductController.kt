package api

import config.log.LoggerDelegate
import infra.domain.Product
import infra.repository.ProductRepository
import main.logger
import org.slf4j.LoggerFactory
import org.springframework.web.bind.annotation.*
import javax.annotation.PostConstruct

@RestController
@CrossOrigin
class ProductController (var productRepository: ProductRepository) {

    val logger by LoggerDelegate()

    @PostConstruct
    fun init(){
        logger.info("ㅎㅇㅎㅇ")
    }

    @GetMapping("/products")
    @ResponseBody
    fun products():Iterable<Product> {
        return productRepository.findAll()
    }

//    @PostMapping("/facebook")
    @RequestMapping("/facebook",method = [RequestMethod.GET,RequestMethod.POST])
    fun facebook():String {
        logger.debug("Face...Book... ")
        return "Hello Facebook"
    }



}