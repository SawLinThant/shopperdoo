import { Box, Button, Typography } from "@mui/material";
import { EllipsisTypography } from "../../common/EllipsisTypography";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../constant/products";

interface IOrderItemCardProps {
  cardType: "ONGOING" | "OFFER" | "JOIN";
  campaignName: string;
  productDetail: Product;
  joinedNumber:number
}

const OrderItemCard = (props: IOrderItemCardProps) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 1,
        columnGap: 1,
        justifyContent: "space-between",
        alignItems: "start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "start",
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
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 0, sm: 1 },
              alignItems: { xs: "start", sm: "center" },
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Lato", sans-serif',
                fontSize: { xs: "17px", sm: "20px" },
              }}
            >
              Campaign
            </Typography>
            <Typography
              color="#980101"
              // variant="h6"
              sx={{
                fontFamily: '"Lato", sans-serif',
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
                fontSize: { xs: "17px", sm: "20px" },
              }}
              onClick={() => {
                navigate(
                  `/product/${props.productDetail.id}?type=${props.cardType}&joined=${props.joinedNumber}`
                );
              }}
            >
              {props.campaignName}
            </Typography>
          </Box>
          <EllipsisTypography
            maxWidth={500}
            variant="body2"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {props.productDetail.name}
          </EllipsisTypography>
          {/* <Typography variant="caption" color="text.secondary">
            Variation: grey+green
          </Typography> */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
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

      {/*For Mobile view */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            columnGap: 2,
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              justifyItems: "center",
              alignItems: "center",
              height: 100,
              paddingTop: { xs: "6px", sm: "30px" },
            }}
          >
            <Typography
              variant="caption"
              color="#fe0019"
              fontSize={"15px"}
              fontWeight={"normal"}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component={"span"}
                variant="caption"
                fontWeight={"normal"}
                color={"#fe0019"}
                fontSize={"15px"}
              >
                {props.joinedNumber}
              </Typography>{" "}
              joined
            </Typography>
            <Typography
              // color="primary.main"
              sx={{
                textDecoration: "line-through",
                display: { xs: "none", sm: "block" },
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
              paddingTop: { xs: "5px", sm: "28px" },
            }}
          >
            <Typography
              // color="primary.main"
              sx={{
                textDecoration: "line-through",
                display: { xs: "block", sm: "none" },
              }}
              variant="h6"
              fontWeight={"bold"}
            >
              $10
            </Typography>
            <Typography color="#980602" fontWeight={"bold"} variant="h6">
              $3
            </Typography>
          </Box>
        </Box>
        {props.cardType == "OFFER" && (
          <Button
            sx={{
              borderRadius: "4px",
              borderColor: "black",
              color: "white",
              backgroundColor: "#4385f5",
              paddingX: { xs: "4px" },
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

      {/*For Desktop view */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          // justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
          height: 100,
          paddingTop: { xs: "6px", sm: "30px" },
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
            {props.joinedNumber}
          </Typography>{" "}
          joined
        </Typography>
        <Typography
          // color="primary.main"
          sx={{
            textDecoration: "line-through",
            display: { xs: "none", sm: "block" },
          }}
          variant="h6"
          fontWeight={"bold"}
        >
          $10
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: 100,
          paddingTop: { xs: "5px", sm: "28px" },
        }}
      >
        <Typography
          // color="primary.main"
          sx={{
            textDecoration: "line-through",
            display: { xs: "block", sm: "none" },
          }}
          variant="h6"
          fontWeight={"bold"}
        >
          $10
        </Typography>
        <Typography color="#980602" fontWeight={"bold"} variant="h6">
          $3
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderItemCard;
