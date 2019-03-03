package infra.domain

import java.sql.Timestamp
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id:Int? = null

    var name:String? = null

    var thumbnailUrl:String? = null

    var description:String? = null

    var price:Int? = null

    var deleted:String? = null

    var createDatetime:Timestamp? = null

    var updateDatetime:Timestamp? = null
}