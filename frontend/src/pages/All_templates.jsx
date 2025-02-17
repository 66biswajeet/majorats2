// All_template.jsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  color: white;
`;

const TemplateName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  width: 100%;
  background: #3b82f6;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #2563eb;
  }
`;

const AllTemplates = () => {
  const templates = [
    {
      id: 1,
      name: "Professional Classic",
      image:
        "https://resumecompanion.com/wp-content/uploads/2017/03/High-School-Student-Resume-Sample.png",
    },
    {
      id: 2,
      name: "Modern Minimal",
      image:
        "https://careers.dasa.ncsu.edu/wp-content/uploads/sites/37/2023/07/Communications-major-resume-example.jpg",
    },
    {
      id: 3,
      name: "Creative Design",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuh_1YhjxFNBtg7IdC92cbTyTqlC22zNustQ&s",
    },
    {
      id: 4,
      name: "Executive Style",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuh_1YhjxFNBtg7IdC92cbTyTqlC22zNustQ&s",
    },
    {
      id: 5,
      name: "Tech Expert",
      image:
        "https://d.novoresume.com/images/doc/skill-based-resume-template.png",
    },
    {
      id: 6,
      name: "Graduate Entry",
      image:
        "https://cdn.enhancv.com/images/648/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vcHJlZGVmaW5lZC1leGFtcGxlcy9jano3RThLdHZYa2JVRjBqUkpPUEFYZHk5Zmw0UTZackFac2lXOEVvL2ltYWdlLnBuZw~~.png",
    },
    {
      id: 7,
      name: "Business Professional",
      image:
        "https://careers.dasa.ncsu.edu/wp-content/uploads/sites/37/2023/07/Communications-major-resume-example.jpg",
    },
    {
      id: 8,
      name: "Academic CV",
      image: "https://static.jobscan.co/blog/uploads/Sales-Resume-Example.png",
    },
  ];

  const handleTemplateClick = (templateName) => {
    alert(`You selected the ${templateName} template`);
  };

  return (
    <Container>
      <Title>Resume Templates</Title>
      <Grid>
        {templates.map((template) => (
          <Card key={template.id}>
            <ImageContainer>
              <Image src={template.image} alt={template.name} />
              <Overlay>
                <TemplateName>{template.name}</TemplateName>
                <Button onClick={() => handleTemplateClick(template.name)}>
                  Use It
                </Button>
              </Overlay>
            </ImageContainer>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default AllTemplates;
