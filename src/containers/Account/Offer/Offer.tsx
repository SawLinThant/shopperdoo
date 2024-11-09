import { TabContext, TabPanel } from "@mui/lab";
import {
  Box,
  // Button,
  Divider,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { OrderItemCard } from "../../../components/account/order";
import { productList } from "../../../constant/products";

const Offer = () => {
  const [tab, setTab] = useState("ongoing");

  const handleChange = (_: React.SyntheticEvent, newtab: string) => {
    setTab(newtab);
  };

  return (
    <TabContext value={tab}>
      <Paper variant="outlined" sx={{ mt: 1 }}>
        <Tabs
          value={tab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          {/* <Tab label="All" value={"all"} /> */}
          <Tab label="Ongoing" value={"ongoing"} />
          <Tab label="Offers" value={"offer"} />
          {/* <Tab label="Left" value={"left"} /> */}
        </Tabs>
      </Paper>

      <TabPanel
        value="ongoing"
        sx={{
          p: 0,
        }}
      >
        <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" fontWeight="bold">
                Shopperdoo
              </Typography>
              <Typography variant="body2" color="primary.main">
                LEFT
              </Typography>
            </Box>
            <Divider />
            <OrderItemCard
              campaignName="16112024-0001"
              cardType="ONGOING"
              productDetail={productList[6]}
            />
            {/* <OrderItemCard
              campaignName="16112024-0002"
              cardType="ONGOING"
              productDetail={productList[1]}
            /> */}
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                gap: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  alignItems: "center",
                  display: "flex",
                  gap: 1,
                }}
              >
                Total{" "}
                <Typography
                  component={"span"}
                  color="#980602"
                  fontWeight={"bold"}
                  variant="h6"
                >
                  $3
                </Typography>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {/* <Button disableElevation color="error" variant="contained">
                  Leave
                </Button> */}
              </Box>
            </Box>
          </Box>
        </Paper>
      </TabPanel>
      {/* <TabPanel
        value="ongoing"
        sx={{
          p: 0,
        }}
      >
        <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
          <Typography textAlign={"center"}>No Ongoing Yet</Typography>
        </Paper>
      </TabPanel> */}
      <TabPanel
        value="offer"
        sx={{
          p: 0,
        }}
      >
        <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" fontWeight="bold">
                Shopperdoo
              </Typography>
              <Typography variant="body2" color="primary.main">
                LEFT
              </Typography>
            </Box>
            <Divider />
            <OrderItemCard
              campaignName="16112024-0001"
              cardType="OFFER"
              productDetail={productList[7]}
            />
            {/* <OrderItemCard
              campaignName="16112024-0002"
              cardType="OFFER"
              productDetail={productList[3]}
            /> */}
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                gap: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  alignItems: "center",
                  display: "flex",
                  gap: 1,
                }}
              >
                Total{" "}
                <Typography
                  component={"span"}
                  color="#980602"
                  fontWeight={"bold"}
                  variant="h6"
                >
                  $3
                </Typography>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {/* <Button disableElevation color="error" variant="contained">
                  Leave
                </Button> */}
              </Box>
            </Box>
          </Box>
        </Paper>
      </TabPanel>
      {/* <TabPanel
        value="left"
        sx={{
          p: 0,
        }}
      >
        <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" fontWeight="bold">
                Shopperdoo
              </Typography>
              <Typography variant="body2" color="primary.main">
                LEFT
              </Typography>
            </Box>
            <Divider />
            <OrderItemCard />
            <OrderItemCard />
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                gap: 2,
              }}
            >
              <Typography variant="body2">
                Order Total{" "}
                <Typography
                  component={"span"}
                  color="primary.main"
                  fontWeight={"bold"}
                >
                  $66.73
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </TabPanel> */}
    </TabContext>
  );
};

export default Offer;
