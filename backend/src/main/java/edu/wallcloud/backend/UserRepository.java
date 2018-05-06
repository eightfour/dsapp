package edu.wallcloud.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
interface UserRepository extends JpaRepository<User, Long> {

    //User findByEMail(String email);
    //User deleteByEMail(String email);
}