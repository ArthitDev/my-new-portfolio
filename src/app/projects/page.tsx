'use client';

import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Box, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Navbar } from '@/components/navbar';

// Mock data for projects
const projects = [
  {
    id: 1,
    title: 'Project Management System',
    date: '2024',
    description:
      'A comprehensive project management system built with Next.js and TypeScript.',
    technologies: ['Next.js', 'TypeScript', 'Material-UI', 'MongoDB'],
    imageUrl: 'https://via.placeholder.com/400x200',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    date: '2023',
    description:
      'Full-stack e-commerce solution with real-time inventory management.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    imageUrl: 'https://via.placeholder.com/400x200',
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    date: '2023',
    description: 'Secure and user-friendly mobile banking application.',
    technologies: ['React Native', 'Redux', 'Firebase'],
    imageUrl: 'https://via.placeholder.com/400x200',
  },
];

export default function ProjectsPage() {
  const theme = useTheme();

  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 2, sm: 4, md: 6 },
          pt: { xs: '100px', sm: '120px' },
          animation: 'fadeIn 0.8s ease-in-out',
          '@keyframes fadeIn': {
            from: {
              opacity: 0,
              transform: 'translateY(20px)',
            },
            to: {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
        }}
      >
        <Timeline position="right">
          {projects.map((project) => (
            <TimelineItem key={project.id}>
              <TimelineOppositeContent
                sx={{
                  flex: 0.1,
                }}
              >
                {project.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    backgroundColor:
                      theme.palette.mode === 'light' ? '#000000' : '#FFFFFF',
                  }}
                />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  py: '12px',
                  px: 2,
                  flex: 0.9,
                }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      transition: 'transform 0.3s ease-in-out',
                      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  <Typography variant="h6" component="h2">
                    {project.title}
                  </Typography>
                  <Box
                    component="img"
                    src={project.imageUrl}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 1,
                      my: 2,
                    }}
                  />
                  <Typography>{project.description}</Typography>
                  <Box sx={{ mt: 2 }}>
                    {project.technologies.map((tech) => (
                      <Typography
                        key={tech}
                        component="span"
                        sx={{
                          backgroundColor: '#000000',
                          color: 'white',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          mr: 1,
                          display: 'inline-block',
                          fontSize: '0.8rem',
                          mb: 1,
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </>
  );
}
