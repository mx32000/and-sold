class DealersController < ApplicationController
  before_action :set_dealer, only: %i[show update destroy]
  before_action :set_auction, only: %i[index create]

  # GET /auctions/1/dealers
  def index
    @dealers = Dealer.where(auction_id: @auction.id)

    render json: @dealers
  end

  # GET /auctions/1/dealers/1
  def show
    render json: @dealer
  end

  # POST /auctions/1/dealers
  def create
    @dealer = Dealer.new(dealer_params)
    @dealer.auction = @auction

    if @dealer.save
      render json: @dealer, status: :created, location: @dealer
    else
      render json: @dealer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /auctions/1/dealers/1
  def update
    if @dealer.update(dealer_params)
      render json: @dealer
    else
      render json: @dealer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /auctions/1/dealers/1
  def destroy
    @dealer.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_dealer
    @dealer = Dealer.find(params[:id])
  end

  def set_auction
    @auction = Auction.find(params[:auction_id])
  end

  # Only allow a list of trusted parameters through.
  def dealer_params
    params.require(:dealer).permit(:name, :phone_number, :email, :address, :auction_id)
  end
end
