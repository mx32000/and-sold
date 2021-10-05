class AuctionsController < ApplicationController
  before_action :set_auction, only: %i[show update destroy]
  before_action :authorize_request

  # GET /auctions
  def index
    @auctions = Auction.all

    render json: @auctions
  end

  # GET /auctions/1
  def show
    render json: @auction
  end

  # POST /auctions
  def create
    @auction = Auction.new(auction_params)
    @auction.user = @current_user

    if @auction.save
      render json: @auction, status: :created
    else
      render json: @auction.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /auctions/1
  def update
    if @auction.update(auction_params)
      render json: @auction
    else
      render json: @auction.errors, status: :unprocessable_entity
    end
  end

  # DELETE /auctions/1
  def destroy
    @auction.destroy
  end

  private

  def set_auction
    @auction = Auction.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def auction_params
    params.require(:auction).permit(:title, :location, :status, :organization, :portion_collected, :tax_rate,
                                    :credit_card_fee, :dates, :notes, :user_id)
  end
end
