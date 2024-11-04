import { Box, Button, Typography } from "@mui/material";
import { EllipsisTypography } from "../../common/EllipsisTypography";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../constant/products";

interface IOrderItemCardProps {
  cardType: "ONGOING" | "OFFER" | "JOIN";
  campaignName: string;
  productDetail: Product;
}

const OrderItemCard = (props: IOrderItemCardProps) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      >
        <Box
          component={"img"}
          src={props.productDetail.image[0] || ""}
          sx={{
            objectFit: "contain",
            width: 100,
            height: 100,
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontFamily: '"Lato", sans-serif' }} variant="h6">
              Campaign
            </Typography>
            <Typography
              color="#980101"
              variant="h6"
              sx={{
                fontFamily: '"Lato", sans-serif',
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => {
                navigate(
                  `/product/${props.productDetail.id}?type=${props.cardType}`
                );
              }}
            >
              {props.campaignName}
            </Typography>
          </Box>
          <EllipsisTypography maxWidth={500} variant="body2">
            {props.productDetail.name}
          </EllipsisTypography>
          {/* <Typography variant="caption" color="text.secondary">
            Variation: grey+green
          </Typography> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <Typography>x1</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                minWidth: "5rem",
                justifyContent: "flex-end",
                paddingRight: "10px",
              }}
            >
              {props.cardType == "OFFER" && (
                <Button
                  sx={{
                    borderRadius: "4px",
                    borderColor: "black",
                    color: "white",
                    backgroundColor: "#4385f5",
                    paddingX: "20px",
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    window.location.href = props.productDetail.shopeeLink;
                  }}
                >
                  Buy Offer
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
          height: 100,
          paddingTop: "30px",
        }}
      >
        <Typography
          variant="caption"
          color="#fe0019"
          fontSize={"15px"}
          fontWeight={"normal"}
        >
          <Typography
            component={"span"}
            variant="caption"
            fontWeight={"normal"}
            color={"#fe0019"}
            fontSize={"15px"}
          >
            900
          </Typography>{" "}
          joined
        </Typography>
        <Typography
          // color="primary.main"
          sx={{
            textDecoration: "line-through",
          }}
          variant="h6"
          fontWeight={"bold"}
        >
          $10
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: 100,
          paddingTop: "28px",
        }}
      >
        <Typography color="#980602" fontWeight={"bold"} variant="h6">
          $3
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderItemCard;
