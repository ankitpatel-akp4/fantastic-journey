package com.example.geektrust;

import com.example.geektrust.service.Service;

public class Main {
    public static void main(String[] args) throws Exception {
    	Service service = new Service();
    	service.run(args[0]);
    }
    
    
    
    
}
