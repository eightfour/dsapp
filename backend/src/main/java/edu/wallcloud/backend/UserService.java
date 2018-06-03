package edu.wallcloud.backend;

import java.util.List;
import edu.wallcloud.backend.User;

public interface UserService {

    User findByName(String name);
    boolean isUserExist(User user);
    void saveUser(User user);

    List<User> findAllUsers();

    //User findById(Long id);
    //void updateUser(User user);
    //void deleteUserByEMail(String email);

}