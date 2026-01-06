/**
 * Here, we manually define the types that will be returned from the database.
 */

/**Users Table */
export type Users = {
    id: number;
    clientId: string;
    email: string;
    name: string;
    phoneNumber: string;
    profession: string;
}

/**Donations Table */
export type Donations = {
    donationId: string;
    clientId: string;
    amount: number;
    date: string;
    status: "Completed" | "Pending";
    donationFrequency: number;
}