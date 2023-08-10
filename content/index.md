# Shared Memory Programming with OpenMP  

## About this course

Almost all modern computers now have a shared-memory architecture with multiple CPUs connected to the same physical memory, for example multicore laptops or large multi-processor compute servers. This course covers OpenMP, the industry standard for shared-memory programming, which enables serial programs to be parallelised easily using compiler directives. Users of desktop machines can use OpenMP on its own to improve program performance by running on multiple cores; users of parallel supercomputers can use OpenMP in conjunction with MPI to better exploit the shared-memory capabilities of the compute nodes. This course contains an introduction to the fundamental concepts of the shared variables model, followed by the syntax and semantics of OpenMP and how it can be used to parallelise real programs.

The course covers the following topics:

- Basic concepts of shared memory: threads, tasks, shared/private data, synchronisation.
- Concepts of OpenMP: parallel regions, shared/private variables, parallel loops, reductions
- OpenMP parallel regions and associated clauses
- OpenMP worksharing directives, scheduling of parallel loops
- OpenMP synchronisation: barriers, critical sections, atomics, locks.
- OpenMP tasks
- Additional features of OpenMP: nesting, orphaning, threadprivate globals, OpenMP 4.0/4.5 feature
- OpenMP tricks, tips and gotchas.
- OpenMP implementations
- Memory models.

This self-service course includes a series of Lecture videos (with downloadable slides) which you can work through at your own pace and in your own time.

Hands-on practical programming exercises are included, with the option of working in either Fortran or C.

Access to ARCHER2 or Cirrus is provided for participants to build and run the exercises.

## Who is the course for?

This course is for application programmers who want to learn shared memory programming using OpenMP. We recommend that you are confident in the basics of C, C++ or Fortran before taking this course. 

## Pre-course questionnaire 

Before you begin this self-service course, we would be most grateful if you could complete this [short pre-course questionnaire](https://forms.office.com/r/gjT6ME4cmr)

## Lectures

```{toctree}
---
maxdepth: 2
---
Part1_FundamentalConcepts/contents
Part2_OpenMPFundamentals/contents
Part3_ParallelRegions/contents
Part4_Worksharing/contents
Part5_Synchronisation/contents
Part6_FurtherTopics/contents
Part7_Tasks/contents
Part8_OpenMP4.0-4.5/contents
Part9_TipsTricksGotchas/contents
Part10_MemoryModel/contents
Part12_OpenMPImplementation/contents
```

## Exercises

```{toctree}
---
maxdepth: 2
---
Exercises/contents
```

## Post-course questionnaire 

Once you have completed the course, we would be most grateful if you could complete the [post-course questionnaire](https://forms.office.com/r/aUth2aKHvD)

