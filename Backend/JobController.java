package com.freelance.platform.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.freelance.platform.entity.Job;
import com.freelance.platform.repository.JobRepository;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin("*")
public class JobController {

    private final JobRepository repo;

    public JobController(JobRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Job> getJobs() {
        return repo.findAll();
    }

    @PostMapping
    public Job addJob(@RequestBody Job job) {
        return repo.save(job);
    }

    // ✅ ADD HERE
    @GetMapping("/add-sample")
    public String addSampleJobs() {
        repo.save(new Job(null, "Java Developer", "Spring Boot Project", 5000));
        repo.save(new Job(null, "Frontend Developer", "React Project", 4000));
        repo.save(new Job(null, "Full Stack Developer", "Java + React", 8000));
        return "Data Added";
    }
}