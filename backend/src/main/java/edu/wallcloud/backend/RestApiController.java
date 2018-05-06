package edu.wallcloud.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;


@RestController
public class RestApiController {

    @Autowired
    UserService userService; // Service which will do all data retrieval/manipulation work

    // Retrieve All Users
    @RequestMapping(value="/users", method=RequestMethod.GET)
    @CrossOrigin(origins= "http://localhost:4200")
    public ResponseEntity<List<User>> listAllUsers() {
        List<User> users = userService.findAllUsers();
        if(users.isEmpty()){
            return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);
        }
        System.out.println("Retrieve All Users:\n");
        for (User user : users) {
        System.out.println(user + "\n");
        }
        return new ResponseEntity<List<User>>(users,HttpStatus.OK);
    }

    // Create a User
    @RequestMapping(value="/users", method=RequestMethod.POST)
    //@CrossOrigin(origins= "http://localhost:4200")
    public ResponseEntity<?> createUser(@RequestBody User user, UriComponentsBuilder ucBuilder) {
        System.out.println("Creating User: \n" + user);
        userService.saveUser(user);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("api/users/{id}").buildAndExpand(user.getId()).toUri());
        return new ResponseEntity<String>(headers, HttpStatus.CREATED);
        
    }
    
}