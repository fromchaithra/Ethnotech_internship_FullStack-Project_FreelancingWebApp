package com.freelance.platform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.freelance.platform.entity.Job;

public interface JobRepository extends JpaRepository<Job, Long> {
}