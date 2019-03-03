package api

import config.log.LoggerDelegate
import infra.domain.Product
import infra.repository.ProductRepository
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono
import javax.annotation.PostConstruct
import kotlin.reflect.jvm.internal.impl.load.kotlin.JvmType

@RestController
@CrossOrigin(value = ["https://localhost:3000"])
class ProductController(val productRepository: ProductRepository) {

    val logger by LoggerDelegate()

    /*
    GET https://graph.facebook.com/v3.2/oauth/access_token?
    client_id={app-id} => 772029506498492
    &redirect_uri={redirect-uri} => https://localhost:8080/facebook
    &client_secret={app-secret} => d09986391c99cf5508e33368cd9590e8
    &code={code-parameter} =>
     */
    val facebookAppId = ""
    val facebookSecretKey = ""


    @PostConstruct
    fun init() {
        logger.info("ㅎㅇㅎㅇ")
    }

    @GetMapping("/products")
    @ResponseBody
    fun products(): Iterable<Product> {
        return productRepository.findAll()
    }

    //    @PostMapping("/facebook")
    @RequestMapping("/facebook", method = [RequestMethod.GET, RequestMethod.POST], params = ["code"])
    fun facebook(@RequestParam("code") authorizationCode: String): Mono<FaceBookResult> {
        val webClient: WebClient = WebClient.create()
        val block = webClient
                .get()
                .uri {
                    val uri = it.scheme("https")
                            .host("graph.facebook.com")
                            .path("/v3.2/oauth/access_token")
                            .queryParam("client_id", "772029506498492")
                            .queryParam("redirect_uri", "https://localhost:8080/facebook")
                            .queryParam("client_secret", "d09986391c99cf5508e33368cd9590e8")
                            .queryParam("code", authorizationCode)
                            .build()
                    logger.debug("REQUEST URI : {}", uri.toASCIIString())
                    uri

                }
                .accept(MediaType.ALL)
                .retrieve()
                .bodyToMono(FaceBookResult::class.java)


        /*
        block.subscribe ({
            logger.debug("Juho : {}",it.toString())
        },{logger.error("JuhoError : {}", it.message)})
        */

        return block
    }


}
data class FaceBookResult(val access_token:String, val token_type:String, val expires_in:Long)