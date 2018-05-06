package edu.wallcloud.backend;

import java.util.List;
import edu.wallcloud.backend.User;

public interface UserService {

    //User findById(Long id);

    //User findByEMail(String email);

    void saveUser(User user);

    //void updateUser(User user);

    //void deleteUserByEMail(String email);

    List<User> findAllUsers();
}