template "start.js" do
  source "start.js.erb"
  mode 0755
end

bash "Run nodejs as http server" do
  code <<-EOH
    node start.js &
  EOH
end