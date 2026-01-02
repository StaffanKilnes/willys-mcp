export interface WillysCredentials {
  username: string;
  password: string;
}

export interface WillysOrder {
  orderNumber: string;
  deliveryDate: string;
  status: string;
  total: number;
  items: WillysOrderItem[];
}

export interface WillysOrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  imageUrl?: string;
  brand?: string;
  category?: string;
  productCode?: string;
}

export interface OrdersResponse {
  orders: WillysOrder[];
}

export interface OrderDetailsResponse {
  order: WillysOrder;
}

export interface ChecklistState {
  [orderId: string]: {
    [itemId: string]: boolean;
  };
}

export interface AuthResult {
  success: boolean;
  error?: string;
}

export interface WillysCustomerAddress {
  id: string;
  firstName: string;
  lastName: string;
  line1: string;
  line2?: string;
  town: string;
  postalCode: string;
  phone?: string;
  cellphone?: string;
  email: string;
  country: {
    isocode: string;
    name: string;
  };
  formattedAddress: string;
}

export interface WillysSavedCard {
  id: string;
  maskedNumber: string;
  cardType: string;
  expired: boolean;
  defaultCard: boolean;
  expireDate: string;
}

export interface WillysBonusInfo {
  bonusAmountCurrentMonth: string;
  currentTierName: string;
  totalDiscountCurrentMonth: string;
  totalDiscountCurrentYear: string;
  currentBonusLevelEndDate: string;
  daysLeftOnCurrentPeriod: number;
  currentBonusVoucherPoints: number;
}

export interface WillysCustomer {
  uid: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  displayUid: string;
  socialSecurityNumber?: string;
  defaultBillingAddress?: WillysCustomerAddress;
  defaultShippingAddress?: WillysCustomerAddress;
  savedCards: WillysSavedCard[];
  bonusInfo: WillysBonusInfo;
  memberCreationMonthAndYear: string;
  memberCreationDateFull: string;
  newCustomer: boolean;
}

export interface WillysCartProduct {
  code: string;
  name: string;
  price: string;
  priceValue: number;
  totalPrice: string;
  totalDiscountedPrice: string;
  quantity: number;
  pickQuantity: number;
  categoryName: string;
  manufacturer?: string;
  displayVolume: string;
  image?: {
    url: string;
    altText: string;
  };
  thumbnail?: {
    url: string;
    altText: string;
  };
  unit: {
    code: string;
    name: string;
  };
  pickUnit: {
    code: string;
    name: string;
  };
  totalDiscount: string;
  totalDiscountValue: number;
  outOfStock: boolean;
  canBeReplaced: boolean;
  doNotReplace: boolean;
}

export interface WillysCart {
  code: string;
  totalPrice: string;
  subTotalPrice: string;
  totalItems: number;
  totalUnitCount: number;
  totalDiscount: string;
  totalDiscountValue: number;
  totalTax: string;
  bufferedAmount: string;
  reservedAmount: string;
  products: WillysCartProduct[];
  orderDate: string;
  deliveryCost: string;
  pickUpCost: string;
  serviceCost: string;
  pickAndPackCost: string;
}

export interface WillysDeliverySlot {
  formattedTime: string;
  totalCost: string;
  totalCostValue: number;
  available: boolean;
  closeTimeFormatted: string;
  closeTime: string;
  startTime: string;
  endTime: string;
  slotId: string;
  date: string;
  type: string;
  fullyBooked: boolean;
  limitReached: boolean;
  deliveryMethod: string;
  tmsDeliveryWindowReference?: {
    earliestDateTime: number;
    latestDateTime: number;
    routeID: number;
    resourceKey: string;
    scheduleKey: string;
    precedingStopId: number;
    stopNumber: number;
    profitability: number;
  };
}

export interface WillysDeliveryDay {
  date: string;
  formattedDate: string;
  slots: WillysDeliverySlot[];
}

export interface WillysDeliverySlotsResponse {
  deliveryDays: WillysDeliveryDay[];
}

export interface WillysCost {
  currencyIso: string;
  value: number;
  priceType: string;
  formattedValue: string;
  minQuantity?: number;
  maxQuantity?: number;
}

export interface WillysPickupSlot {
  pickingCost: WillysCost;
  pickUpCost: WillysCost;
  pickUpExternalLocationCost: WillysCost;
  deliveryCost: WillysCost;
  freeDeliveryThreshold?: WillysCost;
  freePickUpThreshold?: WillysCost;
  freePickingThreshold?: WillysCost;
  b2b: boolean;
  deliverySlot: boolean;
  expressSlot: boolean;
  orderLatestDeliveryTime: number;
  orderEarliestDeliveryTime: number;
  slotBaseStoreId: string;
  dayOfTheWeek: string;
  formattedTime: string;
  closeTimeFormatted: string;
  closeTime: number;
  totalCost: WillysCost;
  earlyCloseTime: boolean;
  tmsDeliveryWindowReference?: string;
  pickupStoreId: string;
  available: boolean;
  startTime: number;
  code: string;
  endTime: number;
}

export interface WillysPickupSlotsResponse {
  isocode: string;
  slots: WillysPickupSlot[];
  selectedSlot?: WillysPickupSlot;
  tmsSlots: boolean;
  minimumPickingCost?: WillysCost;
  minimumFreePickingThreshold?: WillysCost;
  showExternalPickupLocationNotice: boolean;
  startDate: string;
  endDate: string;
}

export interface WillysSmartMatch {
  product: {
    name: string;
    code: string;
    brand: string;
    category: string;
  };
  score: number;
  frequency: number;
  lastPurchased: string;
  recentPurchases: number;
}

export interface WillysSmartMatchResponse {
  success: boolean;
  matches: WillysSmartMatch[];
  message: string;
  searchTerm: string;
}

// ============================================================================
// Raw API Response Types - What the Willys API actually returns
// These are used for type-safe parsing of API responses
// ============================================================================

export interface RawImage {
  url?: string;
  altText?: string;
}

export interface RawUnit {
  code?: string;
  name?: string;
}

export interface RawPrice {
  currencyIso?: string;
  value?: number;
  priceType?: string;
  formattedValue?: string;
}

export interface RawProduct {
  code?: string;
  id?: string;
  name?: string;
  productLine2?: string;
  price?: string;
  priceValue?: number;
  totalPrice?: string | RawPrice;
  totalDiscountedPrice?: string;
  basePrice?: RawPrice;
  quantity?: number;
  pickQuantity?: number;
  originalPickQuantity?: number;
  categoryName?: string;
  manufacturer?: string;
  displayVolume?: string;
  volume?: string;
  image?: RawImage;
  thumbnail?: RawImage;
  unit?: RawUnit;
  pickUnit?: RawUnit | string;
  totalDiscount?: string;
  totalDiscountValue?: number;
  outOfStock?: boolean;
  canBeReplaced?: boolean;
  doNotReplace?: boolean;
  productCodePost?: string;
  url?: string;
  averageRating?: number;
  numberOfReviews?: number;
  badges?: string[];
  potentialPromotions?: unknown[];
  stock?: {
    stockLevelStatus?: string;
    stockLevel?: number;
  };
}

export interface RawOrderStatus {
  code?: string;
}

export interface RawOrder {
  orderNumber?: string;
  code?: string;
  guid?: string;
  deliveryFormattedDate?: string;
  formattedOrderDate?: string;
  status?: string | RawOrderStatus;
  orderStatus?: RawOrderStatus;
  complete?: boolean;
  completed?: boolean;
  total?: string | number;
  reservedAmount?: string;
  totalPrice?: RawPrice;
  nettoTotalCost?: RawPrice;
}

export interface RawOrderDetails {
  code?: string;
  orderNumber?: string;
  deliveryFormattedDate?: string;
  statusDisplay?: string;
  orderStatus?: RawOrderStatus;
  status?: string;
  completed?: boolean;
  totalPrice?: RawPrice;
  nettoTotalCost?: RawPrice;
  requestedDelivery?: number;
  estimatedDelivery?: number;
  slotStartDateTime?: number;
  slot?: {
    startTime?: number;
  };
  categoryOrderedDeliveredProducts?: Record<string, RawProduct[]>;
  partiallyDeliveredProducts?: RawProduct[];
}

export interface RawAddress {
  id?: string;
  firstName?: string;
  lastName?: string;
  line1?: string;
  line2?: string;
  town?: string;
  postalCode?: string;
  phone?: string;
  cellphone?: string;
  email?: string;
  country?: {
    isocode?: string;
    name?: string;
  };
  formattedAddress?: string;
}

export interface RawSavedCard {
  id?: string;
  maskedNumber?: string;
  cardType?: string;
  expired?: boolean;
  defaultCard?: boolean;
  expireDate?: string;
}

export interface RawBonusInfo {
  bonusAmountCurrentMonth?: string;
  currentTierName?: string;
  totalDiscountCurrentMonth?: string;
  totalDiscountCurrentYear?: string;
  currentBonusLevelEndDate?: string;
  daysLeftOnCurrentPeriod?: number;
  currentBonusVoucherPoints?: number;
}

export interface RawCustomerResponse {
  uid?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  displayUid?: string;
  socialSecurityNumer?: string; // Note: typo in Willys API
  socialSecurityNumber?: string;
  defaultBillingAddress?: RawAddress;
  defaultShippingAddress?: RawAddress;
  savedCards?: RawSavedCard[];
  bonusInfo?: RawBonusInfo;
  memberCreationMonthAndYear?: string;
  memberCreationDateFull?: string;
  newCustomer?: boolean;
}

export interface RawCartResponse {
  code?: string;
  totalPrice?: string;
  subTotalPrice?: string;
  totalItems?: number;
  totalUnitCount?: number;
  totalDiscount?: string;
  totalDiscountValue?: number;
  totalTax?: string;
  bufferedAmount?: string;
  reservedAmount?: string;
  orderDate?: string;
  deliveryCost?: string;
  pickUpCost?: string;
  serviceCost?: string;
  pickAndPackCost?: string;
  products?: RawProduct[];
}

export interface RawTmsDeliveryWindowReference {
  earliestDateTime?: number;
  latestDateTime?: number;
  routeID?: number;
  resourceKey?: string;
  scheduleKey?: string;
  precedingStopId?: number;
  stopNumber?: number;
  profitability?: number;
}

export interface RawDeliverySlot {
  formattedTime?: string;
  totalCost?: string;
  totalCostValue?: number;
  available?: boolean;
  closeTimeFormatted?: string;
  closeTime?: string;
  startTime?: string;
  endTime?: string;
  slotId?: string;
  date?: string;
  type?: string;
  fullyBooked?: boolean;
  limitReached?: boolean;
  deliveryMethod?: string;
  tmsDeliveryWindowReference?: RawTmsDeliveryWindowReference;
}

export interface RawDeliveryDay {
  date?: string;
  formattedDate?: string;
  slots?: RawDeliverySlot[];
}

export interface RawDeliverySlotsResponse {
  deliveryDays?: RawDeliveryDay[];
}

export interface RawPickupSlot {
  pickingCost?: RawPrice;
  pickUpCost?: RawPrice;
  pickUpExternalLocationCost?: RawPrice;
  deliveryCost?: RawPrice;
  freeDeliveryThreshold?: RawPrice;
  freePickUpThreshold?: RawPrice;
  freePickingThreshold?: RawPrice;
  b2b?: boolean;
  deliverySlot?: boolean;
  expressSlot?: boolean;
  orderLatestDeliveryTime?: number;
  orderEarliestDeliveryTime?: number;
  slotBaseStoreId?: string;
  dayOfTheWeek?: string;
  formattedTime?: string;
  closeTimeFormatted?: string;
  closeTime?: number;
  totalCost?: RawPrice;
  earlyCloseTime?: boolean;
  tmsDeliveryWindowReference?: string;
  pickupStoreId?: string;
  available?: boolean;
  startTime?: number;
  code?: string;
  endTime?: number;
}

export interface RawPickupSlotsResponse {
  isocode?: string;
  slots?: RawPickupSlot[];
  selectedSlot?: RawPickupSlot;
  tmsSlots?: boolean;
  minimumPickingCost?: RawPrice;
  minimumFreePickingThreshold?: RawPrice;
  showExternalPickupLocationNotice?: boolean;
  startDate?: string;
  endDate?: string;
}

export interface TmsSlotData {
  slotCode?: string;
  tmsDeliveryWindowReference?: RawTmsDeliveryWindowReference;
  [key: string]: unknown;
}

export interface RawSlotSelectionResponse {
  deliveryTimeSlot?: unknown;
  slot?: unknown;
}

export interface RawSearchResult {
  results?: RawProduct[];
  pagination?: {
    currentPage?: number;
    pageSize?: number;
    totalResults?: number;
    totalPages?: number;
  };
}
