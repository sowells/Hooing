package config.log

import main.getClassForLogging
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

class LoggerDelegate<in R : Any> : ReadOnlyProperty<R, Logger> {
    override fun getValue(thisRef: R, property: KProperty<*>): Logger {
        return LoggerFactory.getLogger(getClassForLogging(thisRef.javaClass))
    }
}
