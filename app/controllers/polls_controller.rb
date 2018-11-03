class PollsController < ApplicationController
  before_action :set_poll, only: [:show, :edit, :update, :destroy]


  # GET /polls
  # GET /polls.json
  def upvote
    @poll = Poll.find(params[:id])
    current_user.likes @poll

    if params[:opcion]=='opcion1'
      current_user.likes @poll , :vote_scope => 'opcion1'
      #@poll.liked_by current_user, :vote_scope => 'opcion1'

    elsif params[:opcion]=='opcion2'
      current_user.likes @poll , :vote_scope => 'opcion2'
      #@poll.liked_by current_user, :vote_scope => 'opcion2'

    elsif params[:opcion]=='opcion3'
      current_user.likes @poll , :vote_scope => 'opcion3'
      #@poll.liked_by current_user, :vote_scope => 'opcion3'

    elsif params[:opcion]=='opcion4'
      current_user.likes @poll , :vote_scope => 'opcion4'
      #@poll.liked_by current_user, :vote_scope => 'opcion4'

    end
    redirect_to poll_path(params[:id])

  end

  def index
    @polls = Poll.all
  end

  # GET /polls/1
  # GET /polls/1.json
  def show
  end

  # GET /polls/new
  def new
    @poll = Poll.new
  end

  # GET /polls/1/edit
  def edit
  end

  # POST /polls
  # POST /polls.json
  def create
    @location = Location.find(current_user.location_id)
    @poll = @location.poll.new(poll_params)

    respond_to do |format|
      if @poll.save
        format.html { redirect_to @poll, notice: 'Poll was successfully created.' }
        format.json { render :show, status: :created, location: @poll }
      else
        format.html { render :new }
        format.json { render json: @poll.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /polls/1
  # PATCH/PUT /polls/1.json
  def update
    respond_to do |format|
      if @poll.update(poll_params)
        format.html { redirect_to @poll, notice: 'Poll was successfully updated.' }
        format.json { render :show, status: :ok, location: @poll }
      else
        format.html { render :edit }
        format.json { render json: @poll.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /polls/1
  # DELETE /polls/1.json
  def destroy
    @poll.destroy
    respond_to do |format|
      format.html { redirect_to polls_url, notice: 'Poll was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_poll
      @poll = Poll.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def poll_params
      params.require(:poll).permit(:location_id, :nombre_po, :pregunta, :opcion1, :opcion2, :opcion3, :opcion4, :categoria_po, :usuario)
    end
    def vote_params
      params.require(:poll).permit( :opcion,:id)
    end
end
