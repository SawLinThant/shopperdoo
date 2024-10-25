import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { EllipsisTypography } from "../common/EllipsisTypography";
import { useNavigate } from "react-router-dom";


type ProductCardProps = {
  campaign: String
}
const ProductCard = ({campaign}:ProductCardProps) => {
  const navigate = useNavigate();
  return (
    <Paper
      onClick={() => navigate("/product/123?type=JOIN")}
      square
      sx={{
        position: "relative",
        width: {
          xs: "200px",
          md: "220px",
        },
        p: 1,
        border: "1px solid transparent",
        transition: "border-color 0.3s ease",
        "&:hover": {
          borderColor: "primary.main",
          cursor: "pointer",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: -2,
          bgcolor: "primary.main",
          height: "auto",
          width:'100%',
          //clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
          pl: 0.5,
        }}
      >
        <Typography sx={{display:'flex',flexDirection:'column',alignItems:'start', padding:'0.5rem'}} variant="caption" color="white" fontWeight="semibold">
        
        <Typography fontSize="" fontWeight="semibold" sx={{color:'white'}}>Campaign {campaign} </Typography>
        <Stack sx={{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          gap:'7px',
          width:'100%'
        }}>
           <Typography fontSize="" fontWeight="semibold" sx={{color:'white'}}>ending on </Typography>
           <Typography fontSize="1.25rem" fontWeight="bold" sx={{ wordSpacing:'0'}}>16 Nov 2024</Typography>
        </Stack>
         
        </Typography>
      </Box>
      <Box
        component={"img"}
        src="https://down-sg.img.susercontent.com/file/sg-11134207-7rdvc-m04glex2n5pv41.webp"
        sx={{
          objectFit: "cover",
          width: "100%",
          height: {
            xs: "180px",
            md: "220px",
          },
        }}
      />
      <EllipsisTypography sx={{
        fontFamily:'"Lato",sans-serif',
        fontStyle:'italic'
      }}  variant="body2">
      Join the campaign and enjoy the offer of a lifetime!
      </EllipsisTypography>
      <Stack direction={"row"} sx={{ width: "100%", height: "30px" }}></Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"start"}
      >
        <Stack
        direction={"row"}
        gap={"1px"}
        
        >
          <Typography fontSize={"1.2rem"} color="primary.main" fontWeight={500} sx={{textDecoration:'line-through'}}>
          $2.69
        </Typography>
          <Typography fontSize={"1.2rem"} color="primary.main" fontWeight={500} sx={{color:'yellowgreen'}}>
          $1.69
        </Typography>
        </Stack>
        <Stack direction={"column"} gap={"0px"} alignItems={"center"}>
        <Typography variant="caption">904</Typography>
        <Typography variant="caption">joined</Typography>
        </Stack>
        
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={1}
      >
        <Button
          variant="contained"
          disableElevation
          size="small"
          sx={{ width: "100%",fontSize:'1rem'}}
          // onClick={(e) => {
          //   e.stopPropagation();
          // }}
        >
          Join
        </Button>
      </Stack>
    </Paper>
  );
};

export default ProductCard;
