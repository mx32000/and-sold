class BiddersController < ApplicationController
  before_action :set_bidder, only: [:show, :update, :destroy]

  # GET /bidders
  def index
    @bidders = Bidder.all

    render json: @bidders
  end

  # GET /bidders/1
  def show
    render json: @bidder
  end

  # POST /bidders
  def create
    @bidder = Bidder.new(bidder_params)

    if @bidder.save
      render json: @bidder, status: :created, location: @bidder
    else
      render json: @bidder.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bidders/1
  def update
    if @bidder.update(bidder_params)
      render json: @bidder
    else
      render json: @bidder.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bidders/1
  def destroy
    @bidder.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bidder
      @bidder = Bidder.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bidder_params
      params.require(:bidder).permit(:name, :number, :tax_exempt, :phone_number, :email, :address, :auction_id)
    end
end
