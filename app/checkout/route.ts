import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const products = searchParams.get("products");
  const coupon = searchParams.get("coupon");

  // Si Meta no envía productos,
  // simplemente redirige a tu tienda.
  if (!products) {
    return NextResponse.redirect(
      "https://nathalybotanicals.com"
    );
  }

  // Aquí construiremos el carrito de Square más adelante.
  // Por ahora enviamos al usuario a tu tienda.

  return NextResponse.redirect(
    "https://nathalybotanicals.com"
  );
}
