package edu.wallcloud.backend;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;


@RestController
public class RestApiController {

    @Autowired
    UserService userService;

    @RequestMapping(value="/users", method=RequestMethod.GET)
    @CrossOrigin(origins= "http://localhost:4200")
    public ResponseEntity<List<User>> listAllUsers() {
        List<User> users = userService.findAllUsers();
        if(users.isEmpty()){
            return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);
        }
        for (User user : users) {
        System.out.println(user + "\n");
        }
        return new ResponseEntity<List<User>>(users,HttpStatus.OK);
    }
    
}