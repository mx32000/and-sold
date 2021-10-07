class BiddersController < ApplicationController
  before_action :set_bidder, only: %i[show update destroy]
  before_action :set_auction, only: %i[index create]
  before_action :authorize_request
  before_action :check_bidder_user, only: %i[show update destroy]
  before_action :check_auction_user, only: %i[index create]

  # GET /auctions/1/bidders
  def index
    @bidders = Bidder.where(auction_id: @auction.id)
    if params[:lots]
      render json: @bidders, include: :lots
    else
      render json: @bidders
    end
  end

  # GET /auctions/1/bidders/1
  def show
    if params[:lots]
      render json: @bidder, include: :lots
    else
      render json: @bidder
    end
  end

  # POST /auctions/1/bidders
  def create
    @bidder = Bidder.new(bidder_params)
    @bidder.auction = @auction

    @bidder.number ||= Bidder.order(number: :desc).first.number + 1

    if @bidder.save
      render json: @bidder, status: :created
    else
      render json: @bidder.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /auctions/1/bidders/1
  def update
    if @bidder.update(bidder_params)
      render json: @bidder
    else
      render json: @bidder.errors, status: :unprocessable_entity
    end
  end

  # DELETE /auctions/1/bidders/1
  def destroy
    @bidder.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_bidder
    @bidder = Bidder.find(params[:id])
  end

  def set_auction
    @auction = Auction.find(params[:auction_id])
  end

  # Only allow a list of trusted parameters through.
  def bidder_params
    params.require(:bidder).permit(:name, :number, :tax_exempt, :phone_number, :email, :address)
  end

  def check_auction_user
    render json: 'unauthorized', status: :unauthorized unless check_user(@auction.user.id)
  end

  def check_bidder_user
    render json: 'unauthorized', status: :unauthorized unless check_user(@bidder.user.id)
  end
end
