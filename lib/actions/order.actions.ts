import { CreateOrderParams } from "@/types";
import connectToDatabase from "../database";
import Order from "../database/models/order.model";
import { handleError } from "../utils";


export const createOrder = async (order: CreateOrderParams) => {
  try {
    await connectToDatabase();
    
    const newOrder = await Order.create({
      ...order,
      event: order.eventId,
      buyer: order.buyerId,
    });

    return JSON.parse(JSON.stringify(newOrder));
  } catch (error) {
    handleError(error);
  }
}
