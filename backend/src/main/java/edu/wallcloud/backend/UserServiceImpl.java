package edu.wallcloud.backend;

import java.util.List;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.wallcloud.backend.User;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    /*
    public User findById(Long id){
        return userRepository.findById<User>(id);
    }

    public User findByEMail(String email){
       return userRepository.findByEMail(email);
    }
    */
    public void saveUser(User user){
        userRepository.save(user);
    }

    /*
    public void updateUser(User user){
        saveUser(user);
    }
    
    public void deleteUserByEMail(String email){
        userRepository.deleteByEMail(email);
    }*/

    public List<User> findAllUsers(){
        return userRepository.findAll();
    }
}