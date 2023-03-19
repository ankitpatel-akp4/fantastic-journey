package com.example.geektrust.service;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.Map;
import java.util.Scanner;
import java.util.stream.Collectors;

import com.example.geektrust.data.Data;
import com.example.geektrust.models.Train;

public class Service {
	public void run(String dataPath) throws Exception {
		Data data = new Data();
    	Map<String,Integer> trainARoutesLookupTable = data.getTrainARoute();
    	Map<String,Integer> trainBRoutesLookupTable = data.getTrainBRoute();
    	Train trainA = new Train("A");
    	Train trainB = new Train("B");
    	int dataStartAtIndex = 2;
	
//    	reading the train info from a file
    	
    	try (Scanner scan = new Scanner(new File(dataPath));){
        	trainA.setRoutes(Arrays.asList(scan.nextLine().trim().split(" ")));
        	trainB.setRoutes(Arrays.asList(scan.nextLine().trim().split(" ")));      	
            
        } catch (IOException e) {
        	throw new Exception(e.getMessage());
        }
        
    	removeEngineAndBogiesBeforHYB(dataStartAtIndex,trainA, trainARoutesLookupTable);
    	removeEngineAndBogiesBeforHYB(dataStartAtIndex,trainB, trainBRoutesLookupTable);
    	Train trainAB = trainABFromHadraabad(trainA,trainB,trainARoutesLookupTable,trainBRoutesLookupTable);
    
    	printResult(trainA, trainB, trainAB);
	}
	
	void printResult(Train trainA, Train trainB, Train trainAB) {
    	System.out.println("ARRIVAL TRAIN_A ENGINE "+trainA.getRoutes().stream().collect(Collectors.joining(" ")));
        System.out.println("ARRIVAL TRAIN_B ENGINE "+trainB.getRoutes().stream().collect(Collectors.joining(" ")));
        System.out.println("DEPARTURE TRAIN_AB ENGINE ENGINE "+trainAB.getRoutes().stream().collect(Collectors.joining(" ")));
    }
    
    /**
     * @param train
     * @param trainRoutesLookup
     * @return 
     * finding The bogie order of arrival of Train A and Train B at Hyderabad
     */
    void removeEngineAndBogiesBeforHYB(int dataStartAtIndex,Train train,Map<String,Integer> trainRoutesLookup){
    	
    	 
        train.setRoutes(train.getRoutes().subList(dataStartAtIndex, train.getRoutes().size()).stream().filter((a)->{
        	if(!trainRoutesLookup.containsKey(a)) return true;
        	return trainRoutesLookup.get(a)>=trainRoutesLookup.get("HYB");
        	
        			}).collect(Collectors.toList()));
    }
    Train  trainABFromHadraabad(Train trainA, Train trainB, Map<String,Integer> trainARoutesLookupTable,Map<String,Integer> trainBRoutesLookupTable){
    //  Train AB's departure bogie order from Hyderabad 
    	  
        Train trainAB = new Train("AB");
        trainAB.getRoutes().addAll(trainA.getRoutes());
        trainAB.getRoutes().addAll(trainB.getRoutes());
        trainAB.getRoutes().sort((a,b)->{
        	int aDistance = 0;
        	int bDistance = 0;
        	if(!trainARoutesLookupTable.containsKey(a)) {
        		aDistance = trainBRoutesLookupTable.get(a)-trainBRoutesLookupTable.get("HYB");
        	}else {
        		aDistance = trainARoutesLookupTable.get(a)-trainARoutesLookupTable.get("HYB");
        	}
        	
        	if(!trainBRoutesLookupTable.containsKey(b)) {
        		bDistance = trainARoutesLookupTable.get(b)-trainARoutesLookupTable.get("HYB");
        	}else {
        		bDistance = trainBRoutesLookupTable.get(b)-trainBRoutesLookupTable.get("HYB");
        	}
        	
        	return bDistance-aDistance;
        });
        trainAB.setRoutes(trainAB.getRoutes().stream().filter((a)->!a.equals("HYB")).collect(Collectors.toList()));
        return trainAB;
    }
}
