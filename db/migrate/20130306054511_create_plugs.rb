class CreatePlugs < ActiveRecord::Migration
  def change
    create_table :plugs do |t|
      t.string :title
      t.string :desc
      t.belongs_to :club

      t.timestamps
    end
  end
end
