class ProblematicsController < ApplicationController
  before_action :set_problematic, only: [ :show, :edit, :update, :destroy]


  # GET /problematics
  # GET /problematics.json
  def index

    @problematics=Problematic.joins(thematic: :location).where("thematic_id = ? AND thematics.location_id = ?" , session[:thematic_id], session[:location_id])

    #@thematic = @location.thematic.find(params[:thematic_id])
    #@thematic = Thematic.find(params[:thematic_id])

    #@problematics = @thematic.problematic.where("location_id = ?" , params[:location_id])
    #@problematics = Problematic.where("thematic_id = ? AND location_id = ?" , params[:thematic][:id], params[:location_id])

    #@locations = Location.find(params[:location_id])
    #@thematics = @locations.thematic.find(params[:thematic_id])
    #@problematics = @thematics.problematic
  end

  # GET /problematics/1
  # GET /problematics/1.json
  def show
  end

  # GET /problematics/new
  def new

    @problematic = Problematic.new
  end

  # GET /problematics/1/edit
  def edit
  end

  # POST /problematics
  # POST /problematics.json
  def create

    @thematic = Thematic.find(session[:thematic_id])
    @problematic = @thematic.problematic.new(problematic_params)

    respond_to do |format|
      if @problematic.save
        format.html { redirect_to @problematic, notice: 'Problematic was successfully created.' }
        format.json { render :show, status: :created, location: @problematic }
      else
        format.html { render :new }
        format.json { render json: @problematic.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /problematics/1
  # PATCH/PUT /problematics/1.json
  def update
    respond_to do |format|
      if @problematic.update(problematic_params)
        format.html { redirect_to @problematic, notice: 'Problematic was successfully updated.' }
        format.json { render :show, status: :ok, location: @problematic }
      else
        format.html { render :edit }
        format.json { render json: @problematic.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /problematics/1
  # DELETE /problematics/1.json
  def destroy
    @problematic.destroy
    respond_to do |format|
      format.html { redirect_to problematics_url, notice: 'Problematic was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.


    def set_problematic
      @problematic = Problematic.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def problematic_params

      params.require(:problematic).permit(:nombre_pr, :descripcion_pr, :te_perjudica, :usuario)
    end
end
