"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isAuthenticated } from "@/actions/auth";
import { getOrderDetails } from "@/actions/orders";
import ChecklistItem from "@/components/ChecklistItem";
import type { WillysOrder } from "@/lib/types";

interface OrderDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default function OrderDetailsPage({ params }: OrderDetailsPageProps) {
  const [order, setOrder] = useState<WillysOrder | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const router = useRouter();

  useEffect(() => {
    async function loadOrder() {
      try {
        const { id } = await params;
        const authenticated = await isAuthenticated();

        if (!authenticated) {
          router.push("/login");
          return;
        }

        const orderData = await getOrderDetails(id);

        if (!orderData) {
          setError("Order not found or failed to load");
          return;
        }

        setOrder(orderData);

        const saved = new Set<string>();
        orderData.items?.forEach((item) => {
          const isChecked = localStorage.getItem(`checklist-${id}-${item.id}`);
          if (isChecked === "true") {
            saved.add(item.id);
          }
        });
        setCheckedItems(saved);
      } catch (err) {
        console.error("Error loading order:", err);
        setError("Failed to load order details");
      } finally {
        setLoading(false);
      }
    }

    loadOrder();
  }, [params, router]);

  const handleItemToggle = (itemId: string, checked: boolean) => {
    const newCheckedItems = new Set(checkedItems);
    if (checked) {
      newCheckedItems.add(itemId);
    } else {
      newCheckedItems.delete(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-lg font-medium mb-4">
            {error || "Order not found"}
          </div>
          <Link
            href="/orders"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Back to Orders
          </Link>
        </div>
      </div>
    );
  }

  const totalItems = order.items?.length || 0;
  const checkedCount = checkedItems.size;
  const progressPercentage =
    totalItems > 0 ? (checkedCount / totalItems) * 100 : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <Link
              href="/orders"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Back arrow</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Orders
            </Link>
            <Link
              href="/offers"
              className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Offers
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Order #{order.orderNumber}
                </h1>
                <p className="text-sm text-gray-600">
                  {order.deliveryDate || "Date not available"}
                </p>
              </div>
              <span
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  order.status === "delivered"
                    ? "bg-green-100 text-green-800"
                    : order.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                }`}
              >
                {order.status || "Unknown"}
              </span>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Progress: {checkedCount} of {totalItems} items delivered
                </span>
                <span className="text-sm text-gray-600">
                  {Math.round(progressPercentage)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>Total: {totalItems} items</span>
              <span className="text-lg font-semibold text-green-600">
                {order.total ? `${order.total} kr` : "Total not available"}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {order.items?.map((item) => (
            <ChecklistItem
              key={item.id}
              item={item}
              orderId={order.orderNumber}
              onToggle={handleItemToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
