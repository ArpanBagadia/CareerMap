import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'https://i.pinimg.com/736x/a2/7d/14/a27d14a27b5ef7d35c241d5cc9c1deb4.jpg',
    title: 'HTML',
    width: '20%',
  },
  {
    url: 'https://th.bing.com/th/id/R.f462ea39ee7a688a9c46faa2d230907a?rik=gdVJOgOfym%2fv6Q&riu=http%3a%2f%2fwww.goldenapplewebdesign.com%2fwp-content%2fuploads%2f2011%2f07%2fcss3.jpg&ehk=XJePj%2bDwQf5elnrVTK24c%2fQvyJoDOV7RiybsjKJ7rso%3d&risl=&pid=ImgRaw&r=0',
    title: 'CSS',
    width: '20%',
  },
  {
    url: 'https://emaillistvalidation.com/blog/content/images/2023/10/JavaScript-Symbol-1.png',
    title: 'JAVASCRIPS',
    width: '20%',
  },
  {
    url: 'https://clipground.com/images/react-logo-png-7.png',
    title: 'REACT',
    width: '20%',
  },
  {
    url: 'https://pluspng.com/img-png/nodejs-png-nodejs-icon-png-50-px-1600.png',
    title: 'NODE',
    width: '20%',
  },
  {
    url: 'https://www.mindstick.com/MindStickArticle/7c5e1e50-c56f-43ca-a9ad-4616abfe257e/images/7c5e1e50-c56f-43ca-a9ad-4616abfe257e.jpg',
    title: 'SQL',
    width: '20%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 300,
  // margin: theme.spacing(11),
  marginTop: theme.spacing(4),
  marginRight: theme.spacing(5),
  marginLeft: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 300,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

function Path() {
  return (
    <div>
      <br />
      <center><b>Skill-based Path</b></center>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={(theme) => ({
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: `calc(${theme.spacing(1)} + 6px)`,
                })}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </div>
  )
}

export default React.memo(Path)