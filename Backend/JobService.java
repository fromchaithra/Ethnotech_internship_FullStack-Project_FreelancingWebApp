package com.freelance.platform.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.freelance.platform.entity.Job;
import com.freelance.platform.repository.JobRepository;

@Service
public class JobService {

    @Autowired
    private JobRepository repo;

    public Job save(Job job){
        return repo.save(job);
    }

    public List<Job> getAll(){
        return repo.findAll();
    }
}