const gradleData = [
  {
    id: 0,
    name: "Spring web",
    description:
      "Build web, including RESTful, applications using Spring MVC. Uses Apache Tomcat as the default embedded container.",
   
  },
  {
    id: 1,
    name: "Spring Boot DevTools",
    description:
      "Provides fast application restarts, LiveReload, and configurations for an enhanced development experience.",
    implementation: "developmentOnly 'org.springframework.boot:spring-boot-devtools'",
  },
  {
    id: 2,
    name: "Lombok",
    description:
      "Java annotation library that helps to reduce boilerplate code.",
    implementation: "  compileOnly 'org.projectlombok:lombok'",
  },
  {
    id: 3,
    name: "Spring Reactive Web",
    description:
      "Build reactive web applications with Spring WebFlux and Netty.",
    implementation: "implementation 'org.springframework.boot:spring-boot-starter-activemq",
  },
  {
    id: 4,
    name: "Spring for GraphQL",
    description:
      "Build GraphQL applications with Spring for GraphQL and GraphQL Java.",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-graphql",
  },
  {
    id: 5,
    name: "Spring Web Services",
    description:
      "Facilitates contract-first SOAP development. Allows for the creation of flexible web services using one of the many ways to manipulate XML payloads.",
    implementation: "implementation 'org.springframework.boot:spring-boot-starter-web-services'",
  },
  {
    id: 6,
    name: "Thymeleaf",
    description:
      "A modern server-side Java template engine for both web and standalone environments. Allows HTML to be correctly displayed in browsers and as static prototypes.",
    implementation: "  implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'",
  },
  {
    id: 7,
    name: "OAuth2 Client",
    description:
      "Spring Boot integration for Spring Security's OAuth2/OpenID Connect client features.",
    implementation: "implementation 'org.springframework.boot:spring-boot-starter-oauth2-client'",
  },
  {
    id: 8,
    name: "OAuth2 Authorization Server",
    description: "Spring Boot integration for Spring Authorization Server.",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-oauth2-authorization-server'",
  },
  {
    id: 9,
    name: "OAuth2 Resource Server",
    description:
      "Spring Boot integration for Spring Security's OAuth2 resource server features.",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-oauth2-resource-server'",
  },
  {
    id: 10,
    name: "Spring LDAP",
    description:
      "Makes it easier to build Spring based applications that use the Lightweight Directory Access Protocol.",
    implementation: "  implementation 'org.springframework.boot:spring-boot-starter-data-ldap'",
  },
  {
    id: 11,
    name: "JDBC API",
    description:
      "Database Connectivity API that defines how a client may connect and query a database.",
    implementation: "org.springframework.boot:spring-boot-starter-data-jpa",
  },
  {
    id: 12,
    name: "Spring Data JPA",
    description:
      "Persist data in SQL stores with Java Persistence API using Spring Data and Hibernate.",
    implementation: "  implementation 'org.springframework.boot:spring-boot-starter-data-jpa'",
  },
  {
    id: 13,
    name: "Spring Data JDBC",
    description:
      "Persist data in SQL stores with plain JDBC using Spring Data.",
    implementation: "  implementation 'org.springframework.boot:spring-boot-starter-jdbc'",
  },
  {
    id: 14,
    name: "Spring Data R2DBC",
    description:
      "Provides Reactive Relational Database Connectivity to persist data in SQL stores using Spring Data in reactive applications.",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-data-r2dbc'",
  },
  {
    id: 15,
    name: "H2 Database",
    description:
      "Provides a fast in-memory database that supports JDBC API and R2DBC access, with a small (2mb) footprint. Supports embedded and server modes as well as a browser-based console application.",
    implementation: "runtimeOnly 'com.h2database:h2'",
  },
  {
    id: 16,
    name: "MySQL Driver",
    description: "MySQL JDBC driver.",
    implementation: "mysql:mysql-connector-java",
  },
  {
    id: 17,
    name: "Spring Data MongoDB",
    description:
      "Store data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-data-mongodb'",
  },
  {
    id: 18,
    name: "Spring Data Reactive MongoDB",
    description:
      "Provides asynchronous stream processing with non-blocking back pressure for MongoDB.",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-data-mongodb-reactive' implementation 'org.springframework.boot:spring-boot-starter-data-mongodb-reactive'",
  },
  {
    id: 19,
    name: "Spring Data Elasticsearch (Access+Driver)",
    description:
      "A distributed, RESTful search and analytics engine with Spring Data Elasticsearch.",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-data-elasticsearch'",
  },
  {
    id: 20,
    name: "Spring Data for Apache Cassandra",
    description:
      "A free and open-source, distributed, NoSQL database management system that offers high-scalability and high-performance.",
    implementation: "implementation 'org.springframework.boot:spring-boot-starter-data-cassandra'",
  },
  {
    id: 21,
    name: "Spring Data Neo4j",
    description:
      "An open-source NoSQL database that stores data structured as graphs consisting of nodes, connected by relationships.",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-data-neo4j'",
  },
  {
    id: 22,
    name: "Spring for Apache Kafka",
    description: "Publish, subscribe, store, and process streams of records.",
    implementation: " implementation 'org.springframework.kafka:spring-kafka'",
  },
  {
    id: 23,
    name: "Spring for Apache Kafka Streams",
    description:
      "Building stream processing applications with Apache Kafka Streams.",
    implementation: " implementation 'org.apache.kafka:kafka-streams'",
  },
  {
    id: 24,
    name: "Spring for Apache ActiveMQ 5",
    description: "Spring JMS support with Apache ActiveMQ 'Classic'.",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-activemq'",
  },
  {
    id: 25,
    name: "Prometheus",
    description:
      "Expose Micrometer metrics in Prometheus format, an in-memory dimensional time series database with a simple built-in UI, a custom query language, and math operations.",
    implementation: "runtimeOnly 'io.micrometer:micrometer-registry-prometheus'",
  },
  {
    id: 26,
    name: "Eureka Server",
    description: "spring-cloud-netflix Eureka Server.",
    implementation: "org.springframework.cloud:spring-cloud-starter-netflix-eureka-server",
  },
  {
    id: 27,
    name: "Apache Zookeeper Discovery",
    description: "Service discovery with Apache Zookeeper.",
    implementation: " implementation 'org.springframework.cloud:spring-cloud-starter-zookeeper-discovery'",
  },
  {
    id: 28,
    name: "Gateway",
    description:
      "Provides a simple, yet effective way to route to APIs and provide cross-cutting concerns to them such as security, monitoring/metrics, and resiliency.",
    implementation: " implementation 'org.springframework.cloud:spring-cloud-starter-gateway'",
  },
  {
    id: 29,
    name: "OpenFeign",
    description:
      "Easily write code that is both a client and a server in Spring Cloud applications.",
    implementation: "  implementation 'org.springframework.cloud:spring-cloud-starter-openfeign'",
  },
 
 
  {
    id: 30,
    name: "Zipkin",
    description: "Zipkin distributed tracing for Spring Cloud.",
    implementation: "implementation 'io.zipkin.reporter2:zipkin-reporter-brave'",
  },
 
];

export default mockData;
