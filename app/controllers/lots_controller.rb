class LotsController < ApplicationController
  before_action :set_lot, only: %i[show update destroy]
  before_action :set_auction, only: %i[index create]
  before_action :authorize_request

  # GET /auctions/1/lots
  def index
    @lots = Lot.where(auction_id: @auction.id)

    render json: @lots
  end

  # GET /auctions/1/lots/1
  def show
    render json: @lot
  end

  # POST /auctions/1/lots
  def create
    @lot = Lot.new(lot_params)
    @lot.auction = @auction

    if @lot.save
      render json: @lot, status: :created
    else
      render json: @lot.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /auctions/1/lots/1
  def update
    if @lot.update(lot_params)
      render json: @lot
    else
      render json: @lot.errors, status: :unprocessable_entity
    end
  end

  # DELETE /auctions/1/lots/1
  def destroy
    @lot.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_lot
    @lot = Lot.find(params[:id])
  end

  def set_auction
    @auction = Auction.find(params[:auction_id])
  end

  # Only allow a list of trusted parameters through.
  def lot_params
    params.require(:lot).permit(:number, :description, :price, :dealer_id, :bidder_id)
  end
end
